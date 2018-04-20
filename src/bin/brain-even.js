#!/usr/bin/env node
import { brainevenRules, braineven } from '../games/brain-even-code';
import * as start from '..';

start.greetings();
brainevenRules();
const name = start.getName();
braineven(name);
