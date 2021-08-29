const Application = require("../application/Application");
const {CreateGame} = require("../application/api/commands/game");
const {StartIteration, EndIteration} = require("../application/api/commands/iteration");
const {IterationStarted, IterationFinished} = require("../application/api/events/iteration");
const {GameCreated} = require("../application/api/events/game");

describe('Iteration', () => {
  let application = undefined;
  let events = undefined;

  beforeEach(function () {
    application = Application();
    application.execute(CreateGame('g1'))
    events = [];
    application.subscribe("*", event => events.push(event))
  });

  it('can start', function () {
    application.execute(StartIteration('g1', 'i1'))
    expect(events).toMatchObject([
      IterationStarted('g1', 'i1')
    ]);
  });

  it('can end', function () {
    application.execute(StartIteration('g1', 'i1'))
    application.execute(EndIteration('g1', 'i1'))
    expect(events).toMatchObject([
      IterationStarted('g1', 'i1'),
      IterationFinished('g1', 'i1')
    ]);
  });

  it('cannot start a started iteration', function () {
    application.execute(StartIteration('g1', 'i1'), StartIteration('g1', 'i1'))
    expect(events).toMatchObject([
      IterationStarted('g1', 'i1')
    ]);
  });

  it('cannot end an unstarted iteration', function () {
    application.execute(EndIteration('i1'))
    expect(events).toMatchObject([]);
  });

  describe('Process manager', () => {
    beforeEach(jest.useFakeTimers);
    afterEach(jest.useRealTimers);

    it('ends the iteration after a timeout', function () {
      application.execute(StartIteration('g1', 'i1'))
      jest.runAllTimers();
      expect(events).toMatchObject([
        IterationStarted('g1', 'i1'),
        IterationFinished('g1', 'i1')
      ]);
    });
  });
});

