// import { name, code } from "./modules/user.js";
// import { withdraw as wd, deposit } from "./modules/account.js";

import * as usr from "./modules/user.js";
// import * as acc from "./modules/account.js";
import {
  default as accDefault,
  withdraw as wd,
  deposit,
} from "./modules/account.js";

console.log(usr.name);
usr.code();

wd();
deposit();

accDefault();
