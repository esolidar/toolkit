const getLocalStorageAuctionPrivateCode = (auctionId: number): number | null => {
  if (localStorage.privateCode) {
    const hasAuctionCode = JSON.parse(localStorage.privateCode);
    const auctionCode = hasAuctionCode.find(item => +item.id === +auctionId);
    return auctionCode ? auctionCode.code : null;
  }
  return null;
};

export default getLocalStorageAuctionPrivateCode;
