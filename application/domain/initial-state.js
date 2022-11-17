const initialState = () => ({
    columns: [
      {columnId: "c1", columnType: "todo-column", nextColumnId: "c2", title: "Order", taskName: "todo"},
      {columnId: "c2", columnType: "work-column", nextColumnId: "c3", title: "Pay", taskName: "analysis", difficulty: 1},
      {columnId: "c3", columnType: "wait-column", nextColumnId: "c4", title: "", taskName: "analysis"},
      {columnId: "c4", columnType: "work-column", nextColumnId: "c5", title: "Cook", taskName: "development", difficulty: 3},
      {columnId: "c5", columnType: "wait-column", nextColumnId: "c6", title: "", taskName: "development"},
      {columnId: "c6", columnType: "work-column", nextColumnId: "c7", title: "Wrap", taskName: "ops", difficulty: 2},
      {columnId: "c7", columnType: "wait-column", nextColumnId: "c8", title: "", taskName: "ops"},
      {columnId: "c8", columnType: "test-column", nextColumnId: "c9", title: "Collect", taskName: "qa"},
      {columnId: "c9", columnType: "done-column", title: "Done", taskName: "done"},
      {columnId: "c10", columnType: "fail-column", title: "Defects", taskName: "defect"},
    ]
  }
)
module.exports = initialState