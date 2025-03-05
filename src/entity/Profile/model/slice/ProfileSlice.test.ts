import { Country } from "entity/Country"
import { Profile, ProfileSchema, ValidateProfileErrors } from "../types/profile"
import { profileActions, profileReducer } from "./ProfileSlice"
import { saveData } from "../services/saveData/saveData"


describe('ProfileSlice',() => {
    const state: ProfileSchema = {
        isLoading: false,
        readonly: true,
        data: {
            first: 'daniil',
            age: 20,
            country: Country.RUSSIA
        },
        form: {
            first: 'daniil1504',
            age: 20,
            country: Country.RUSSIA
        },
    }
    test('Set readonly', () => {
        expect(profileReducer(state, profileActions.setReadonly(false))).toEqual({...state, readonly: false}) 
    })
    test('Discard changes', () => {
        expect(
            profileReducer(state, profileActions.discardChanges())
        ).toEqual(
            {
                ...state,
                form: {
                    first: 'daniil', 
                    age: 20, 
                    country: Country.RUSSIA
                }
            }
        ) 
    })
    test('Update profile', () => {
        expect(
            profileReducer(state, profileActions.updateProfile({first: 'daniil1523'}))
        ).toEqual(
            {
                ...state,
                form: {
                    first: 'daniil1523', 
                    age: 20, 
                    country: Country.RUSSIA
                }
            }
        ) 
    })
    test('Update profile service pending', () => {
        const state: Partial<ProfileSchema> = {
            isLoading: true,
            validateErrors: [ValidateProfileErrors.SERVER_ERROR]
        }
        const action = saveData.pending('request');
    
        expect(profileReducer(state as ProfileSchema, action)).toEqual({isLoading: true, validateErrors: undefined})
    })
    test('Update profile service fulfilled', () => {
        const state: ProfileSchema = {
            isLoading: false,
            readonly: true,
            data: {
                first: 'daniil',
                age: 20,
                country: Country.RUSSIA
            },
            form: {
                first: 'daniil1504',
                age: 20,
                country: Country.RUSSIA
            },
        }

        const action = saveData.fulfilled(state.data as Profile, '');
    
        expect(profileReducer(state as ProfileSchema, action)).toEqual(
            {
                isLoading: false, 
                data: state.data,
                form: state.form,
                readonly: true,
                validateErrors: undefined,
            })
    })
})