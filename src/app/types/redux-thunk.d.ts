// This is required to fix redux thunk errors introduced with react-redux version 8
import 'redux';
import {
    Action, ActionCreatorsMapObject, AnyAction, ThunkAction,
} from '@reduxjs/toolkit';

declare module 'redux' {
    /**
     * Overload for bindActionCreators redux function, returns expects responses
     * from thunk actions
     */
    function bindActionCreators<
        ActionCreators extends ActionCreatorsMapObject<any>
    >(
        actionCreators: ActionCreators,
        // eslint-disable-next-line no-use-before-define
        dispatch: Dispatch
    ): {
        [ActionCreatorName in keyof ActionCreators]: ReturnType<
            ActionCreators[ActionCreatorName]
        > extends ThunkAction<any, any, any, any>
            ? (
                ...args: Parameters<ActionCreators[ActionCreatorName]>
            ) => ReturnType<ReturnType<ActionCreators[ActionCreatorName]>>
            : ActionCreators[ActionCreatorName]
    }

    /*
     * Overload to add thunk support to Redux's dispatch() function.
     * Useful for react-redux or any other library which could use this type.
     */
    // @ts-ignore
    export interface Dispatch<A extends Action = AnyAction> {
        <ReturnType = any, State = any, ExtraThunkArg = any>(
            thunkAction: ThunkAction<ReturnType, State, ExtraThunkArg, A>
        ): ReturnType
    }
}
