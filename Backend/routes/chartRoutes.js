const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const { admin } = require('../middleware/admin');

router.get('/dashboard/subscriptions', protect, admin, (req, res) => {
  const subscriptionsData = [
    {
      name: "Subscriptions",
      data: [40, 55, 35, 75, 60, 42],
    },
  ];
  res.json(subscriptionsData);
});

router.get('/dashboard/order-stats', protect, admin, (req, res) => {
  const orderStatsData = [
    {
      name: "Orders",
      data: [30, 40, 25, 50, 49, 60, 70],
    },
  ];
  res.json(orderStatsData);
});

router.get('/dashboard/viewership', protect, admin, (req, res) => {
  const viewershipData = [
    {
      name: "Total Views",
      data: [200, 190, 180, 230, 900, 500, 850, 1000, 750, 950, 980, 1000],
    },
    {
      name: "Unique Viewers",
      data: [150, 160, 170, 180, 600, 400, 700, 900, 720, 900, 950, 970],
    },
  ];
  res.json(viewershipData);
});

router.get('/dashboard/subscription-status', protect, admin, (req, res) => {
  const subscriptionStatusData = {
    series: [75, 40, 10],
    labels: ["Active", "Renewal", "Cancel"],
    counts: {
      active: 10069,
      renewal: 269,
      cancel: 42,
    },
  };
  res.json(subscriptionStatusData);
});

module.exports = router;


