export const getStatus = (status: string) => {
  switch (status) {
    case 'order-processing':
      return 'Order Processing';
    default:
      return '';
  }
};
