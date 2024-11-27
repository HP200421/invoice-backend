const sanitizeUsefulInput = (req, allowedFields = [], Model = null) => {
  if (!allowedFields.length && Model) {
    allowedFields = Object.keys(Model.schema.paths).filter(
      (field) => !["_id", "__v", "createdAt", "updatedAt"].includes(field)
    );
  }

  for (const key of Object.keys(req.body)) {
    if (!allowedFields.includes(key)) {
      delete req.body[key];
    }
  }
};

export default sanitizeUsefulInput;
