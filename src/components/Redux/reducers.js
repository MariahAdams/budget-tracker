export const CATEGORY_LOAD = 'CATEGORY_LOAD';
// // export const CATEGORY_ADD = 'CATEGORY_ADD';
// // export const CATEGORY_UPDATE = 'CATEGORY_UPDATE';
// // export const CATEGORY_REMOVE = 'CATEGORY_REMOVE';

export function categories(state = [], { type, payload }) {
  switch(type) {
    case CATEGORY_LOAD:
      return payload;
    default:  
      return state; 
  }
}