import { defineStore } from "pinia";

export const useUsersStore = defineStore('users', {
    state: () => {
        return {
            users: [
                {
                    firstName: 'John',
                    lastName: 'doe',
                    isMember: true,
                },
            ],
            }
        },
        actions: {
            addUser(user) {
                this.users.push(user)
            },
        },
    })