import { Router } from 'express';
const router = Router();
import * as movCtrl from '../controllers/movimiento.controllers';
import {authJwt} from '../middlewares'
// Definimos las rutas::

router.post('/create',[authJwt.verifyToken,authJwt.isJefeOrAlmacenero], movCtrl.createMovimiento);
router.get('/searchByCode/:codigo',[authJwt.verifyToken,authJwt.isJefeOrAlmacenero], movCtrl.getMovimientoByCode);
router.put('/anular_mov/:_id',[authJwt.verifyToken,authJwt.isJefeAlmacen], movCtrl.updateAnular);
router.get('/aprobados',[authJwt.verifyToken,authJwt.isJefeOrAlmacenero], movCtrl.getMovimientosAprobados);
router.get('/anulados',[authJwt.verifyToken,authJwt.isJefeOrAlmacenero], movCtrl.getMovimientosAnulados);
router.get('/reporte/:codigo'/*,[authJwt.verifyToken,authJwt.isJefeOrAlmacenero]*/, movCtrl.getReporte);
module.exports= router;