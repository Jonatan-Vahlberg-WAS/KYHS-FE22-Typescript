import React from "react";

export interface Task {
    id: number;
    title: string;
    completed: boolean;
}

type LocalStorageKey = "@LS_TODO_LIST";

export const useTaskManager = (
    initialTasks: Task[],
) => {
    const [tasks, setTasks] = React.useState<Task[]>(initialTasks);

    const _generateTask = (title: string): Task => {
        const highestId = tasks.map(task => task.id).reduce((prev, curr) => {
            return Math.max(prev, curr);
        }, 0);

        return {
            id: highestId + 1,
            title,
            completed: false,
        };
    }

    const addTask = (title: string, onAdded?: (newTasks: Task[]) => void) => {
        setTasks((prevTasks) => {
            const newTask = _generateTask(title);
            const newTasks = [...prevTasks, newTask];
            if(onAdded){
                onAdded(newTasks);
            }
            return newTasks;
        });
    };

    const setInitialTasks = (tasks: Task[]) => {
        setTasks(tasks);
    }

    return {
        tasks,
        addTask,
        setInitialTasks,
    } as const;
}

export const useLocalStorage = <T>(key: LocalStorageKey) => {

    const setStoredValue = (value: T) => {
        if( typeof value !== "string"){
            localStorage.setItem(key, JSON.stringify(value));
            return;
        }
        localStorage.setItem(key, value);
    }

    const getStoredValue = (): T | null => {
        const value = localStorage.getItem(key);
        if(value === null){
            return null;
        }
        try {
            return JSON.parse(value);
        } catch (error) {
            return value as unknown as T;
        }
    }

    return [getStoredValue, setStoredValue] as const;
}