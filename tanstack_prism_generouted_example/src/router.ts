// Generouted, changes to this file will be overriden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client'

export type Path =
  | `/chain/tanstack_query/on_success`
  | `/chain/tanstack_query/use_effect`
  | `/chain/use_state`
  | `/click/tanstack_query`
  | `/click/use_state`
  | `/create/tanstack_query/create`
  | `/create/tanstack_query/create_and_reload`
  | `/create/use_state/create`
  | `/create/use_state/create_and_reload`
  | `/initial_load/tanstack_query`
  | `/initial_load/use_state`

export type Params = {
  
}

export type ModalPath = never

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<Path, Params, ModalPath>()
export const { redirect } = utils<Path, Params>()
