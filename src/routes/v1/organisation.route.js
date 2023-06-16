const router = require('express').Router();
const validate = require('../../middlewares/validate');
const organisationValidation = require('../../validations/organisation.validation');
const organisationController = require('../../controllers/organisation.controller');
const upload = require('../../config/multer');
const auth = require('../../middlewares/auth');



router.post('/', upload.single('organisation_logo'), organisationController.createOrganisation)
router.get('/', organisationController. getAllorganisation)
router.get('/:organisation_id', validate(organisationValidation.getOneOrganisation), organisationController.getOneorganisation)
router.put('/:organisation_id', upload.single('organisation_logo'), organisationController.updateorganisation)
router.delete('/:organisation_id',  organisationController.deleteorganisation)

module.exports = router