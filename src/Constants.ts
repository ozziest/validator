import { RuleType, RuleFunction } from "./Types";
import rules from "./rules";
import { IOptions } from "./Interface";

export const RULE_FUNCTION_MAPS: Record<RuleType, RuleFunction> = {
  string: rules.isString,
  boolean: rules.isBoolean,
  accepted: rules.isAccepted,
  after: rules.isAfter,
  after_or_equal: rules.isAfterOrEqual,
  alpha: rules.isAlpha,
  alpha_dash: rules.isAlphaDash,
  alpha_num: rules.isAlphaNum,
  array: rules.isArray,
  before: rules.isBefore,
  before_or_equal: rules.isBeforeOrEqual,
  between: rules.isBetween,
  confirmed: rules.isConfirmed,
  date: rules.isDate,
  digits: rules.isDigits,
  digits_between: rules.isDigitsBetween,
  email: rules.isEmail,
  hex: rules.isHex,
  in: rules.isIn,
  integer: rules.isInteger,
  max: rules.isMax,
  min: rules.isMin,
  not_in: rules.isNotIn,
  numeric: rules.isNumeric,
  required: rules.isRequired,
  size: rules.isSize,
  url: rules.isUrl,
};

export const DEFAULT_OPTIONS: IOptions = {
  stopOnFail: false,
  language: "en",
  translations: {},
};
