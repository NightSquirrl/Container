/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { FormMeta, FormRenderProps } from "@flowgram.ai/free-layout-editor";

export const FormRender = ({ form }: FormRenderProps<any>) => (
  <>
    <div>CODE</div>
  </>
);

export const formMeta: FormMeta = {
  render: (props) => <FormRender {...props} />,
};
