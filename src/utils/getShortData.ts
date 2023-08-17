export const calculateMaxDataLength = (windowSize: number) => {
  switch (true) {
    case windowSize > 1250:
      return 80;
    case windowSize > 1180:
      return 60;
    case windowSize > 768:
      return 55;
    case windowSize > 530:
      return 42;
    default:
      return 24;
  }
};

export const getShortData = (data: string, maxDataLength: number) => {
  if (data.length > maxDataLength) {
    return `${data.slice(0, maxDataLength)}...`;
  }

  return data;
};
