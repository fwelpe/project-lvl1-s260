#!/usr/bin/env node
import { braincalcRules, braincalc } from '../games/brain-calc-code';
import * as start from '..';

start.greetings();
braincalcRules();
const name = start.getName();
braincalc(name);
