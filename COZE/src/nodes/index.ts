/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { FlowNodeRegistry } from '../typings';
import { CodeNodeRegistry } from './code';
import { HTTPNodeRegistry } from './http';


export const nodeRegistries: FlowNodeRegistry[] = [
  HTTPNodeRegistry,
  CodeNodeRegistry,

];
