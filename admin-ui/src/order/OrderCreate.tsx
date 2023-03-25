import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="NAME" source="name" />
      </SimpleForm>
    </Create>
  );
};
