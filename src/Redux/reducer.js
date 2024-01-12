// Redux/reducer.js
const initialState = {
  budgets: [],
};

const budgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BUDGET':
      return {
        ...state,
        budgets: [...state.budgets, action.payload],
      };
    case 'DELETE_BUDGET':
      return {
        ...state,
        budgets: state.budgets.filter((budget) => budget.id !== action.payload),
      };
    case 'UPDATE_BUDGET_FIELDS':
      return {
        ...state,
        budgets: state.budgets.map((budget) => {
          if (budget.id === action.payload.id) {
            const updatedBudget = {
              ...budget,
              ...action.payload.updatedFields,
            };

            // Calculate Remaining Money
            if (updatedBudget.amount !== undefined && updatedBudget.spendMoney !== undefined) {
              updatedBudget.remainingMoney = updatedBudget.amount - updatedBudget.spendMoney;
            }

            return updatedBudget;
          }
          return budget;
        }),
      };
    default:
      return state;
  }
};

export default budgetReducer;
