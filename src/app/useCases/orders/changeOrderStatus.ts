import { RequestHandler } from 'express';
import { Order } from '../../models/Order';

export const changeOrderStatus: RequestHandler = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    if (!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)) {
      res.status(400).json({
        error: 'Status should be one of these: WAITING, IN_PRODUCTION, DONE.'
      });
      return;
    }

    await Order.findByIdAndUpdate(orderId, { status });

    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
