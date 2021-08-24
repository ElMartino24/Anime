import { check, validationResult } from "express-validator";


export const blogInput = [
    check("title").trim().isLength({min:6, max: 25}).isString().withMessage('Title nix gut'),
    check("text").trim().isLength({min:10, max: 255}).isString().withMessage('Text nix gut'),

    (req, res, next) => {
      const errors = validationResult(req);
      if(!errors.isEmpty()) {
        return res.status(422).json({
          message:"Title oder Text zu kurz oder zu lang",
          content: errors,
          isSuccess:false
        })
      }
      next();
    }
  ]

  export const updateInput = [
    check("title").trim().isLength({min:6, max: 25}).isString().withMessage('Title nix gut'),
    check("text").trim().isLength({min:10, max: 255}).isString().withMessage('Text nix gut'),

    (req, res, next) => {
      const errors = validationResult(req);
      if(!errors.isEmpty()) {
        return res.status(422).json({
          message:"Title oder Text zu kurz oder zu lang",
          content: errors,
          isSuccess:false
        })
      }
      next();
    }
  ]


  