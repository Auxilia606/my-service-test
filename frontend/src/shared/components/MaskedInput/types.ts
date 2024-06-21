import { InputProps } from "antd";

import { FactoryArg } from "imask";

export type MaskedInputProps = InputProps & { opts: FactoryArg };
