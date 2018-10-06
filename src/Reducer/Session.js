export function chooseDistrict(state = 1, action) {
  switch (action.type) {
    case 'CHOOSE_DISTRICT':
      return action.district;
    default:
      return state;
  }
}
