import { CounterSchema } from "entity/Counter";
import { UserSchema } from "entity/User";
import { AuthSchema } from "fitures/AuthByUsername";



export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,
    authForm?: AuthSchema
}