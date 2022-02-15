export const selectNearbyStores = state => {
  const pickupPoints = state.stores.nearbyStores?.pickupPoints;
  return pickupPoints ? pickupPoints : [];
};
