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
  | `/query_key/factory/duplicate_keys/each_import`
  | `/query_key/factory/duplicate_keys/merge`
  | `/query_key/factory/merge_keys`
  | `/query_key/factory/single_store`
  | `/query_key/multiple_elements/array/all_keys`
  | `/query_key/multiple_elements/array/first_key`
  | `/query_key/multiple_elements/array/first_key_with_exact`
  | `/query_key/multiple_elements/object`
  | `/query_key/selectable_reload`
  | `/query_key/single_element/different_string`
  | `/query_key/single_element/same_string`
  | `/use_query/select_option/difference/with_select`
  | `/use_query/select_option/difference/without_select`
  | `/use_query/select_option/filter_data`
  | `/use_query/select_option/with_is_refetching/notify_on_change_props`
  | `/use_query/select_option/with_is_refetching/select_only`

export type Params = {
  
}

export type ModalPath = never

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<Path, Params, ModalPath>()
export const { redirect } = utils<Path, Params>()
