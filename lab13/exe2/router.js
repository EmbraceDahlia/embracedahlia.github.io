import express from 'express';
const router = express.Router();

function getNumbers(req) {
  const a = parseFloat(req.params.a || req.query.a || req.body.a);
  const b = parseFloat(req.params.b || req.query.b || req.body.b);
  return { a, b };
}

function operationHandler(fn) {
  return (req, res) => {
    const { a, b } = getNumbers(req);
    if (isNaN(a) || isNaN(b)) {
      return res.status(400).json({ error: 'Inputs must be valid numbers.' });
    }
    try {
      const result = fn(a, b);
      res.json({ results: result });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
}

router.get('/addition/:a/:b', operationHandler((a, b) => a + b));
router.get('/addition', operationHandler((a, b) => a + b));
router.post('/addition', operationHandler((a, b) => a + b));

router.get('/subtraction/:a/:b', operationHandler((a, b) => a - b));
router.get('/subtraction', operationHandler((a, b) => a - b));
router.post('/subtraction', operationHandler((a, b) => a - b));

router.get('/multiplication/:a/:b', operationHandler((a, b) => a * b));
router.get('/multiplication', operationHandler((a, b) => a * b));
router.post('/multiplication', operationHandler((a, b) => a * b));

router.get('/division/:a/:b', operationHandler((a, b) => {
  if (b === 0) throw new Error('Cannot divide by zero');
  return a / b;
}));
router.get('/division', operationHandler((a, b) => {
  if (b === 0) throw new Error('Cannot divide by zero');
  return a / b;
}));
router.post('/division', operationHandler((a, b) => {
  if (b === 0) throw new Error('Cannot divide by zero');
  return a / b;
}));

router.get('/modulus/:a/:b', operationHandler((a, b) => a % b));
router.get('/modulus', operationHandler((a, b) => a % b));
router.post('/modulus', operationHandler((a, b) => a % b));

export default router;
