/* Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

import { ActionTypes } from '../actions/strategicActions';

const initialState = {
  all: [],
  group: {
    details: {},
    projects: [],
    users: [],
  },
};

const GroupsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_GROUPS: {
      const newState = {
        all: action.payload,
        group: state.group,
      };
      return newState;
    }
    case ActionTypes.FETCH_GROUP: {
      const newState = {
        all: state.all,
        group: {
          details: action.payload.group,
          projects: action.payload.projects,
          users: action.payload.users,
        },
      };
      return newState;
    }
    default:
      return state;
  }
};

export default GroupsReducer;
