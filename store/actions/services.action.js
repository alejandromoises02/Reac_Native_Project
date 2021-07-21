export const FILTER_SERVICES = 'FILTER_SERVICES';

export const filterServices= (id) => ({
  type: FILTER_SERVICES,
  categoryID: id,
})