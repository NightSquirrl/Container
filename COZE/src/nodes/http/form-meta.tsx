
import { FormMeta, FormRenderProps } from "@flowgram.ai/free-layout-editor";

export const FormRender = ({ form }: FormRenderProps<any>) => (
  <>
    <div>HTTP</div>
  </>
);

export const formMeta: FormMeta = {
  render: (props) => <FormRender {...props} />,
};
