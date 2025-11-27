export type Resolution =
    | "P144"
    | "P240"
    | "P360"
    | "P480"
    | "P720"
    | "P1080"
    | "P1440"
    | "P2160";
export const allowedResolutions:Resolution[] = [
    "P144",
    "P240",
    "P360",
    "P480",
    "P720",
    "P1080",
    "P1440",
    "P2160"
];

export type Video = {
    id: number;                     // integer
    title: string;                  // string
    author: string;                 // string
    canBeDownloaded: boolean;       // boolean, default: false
    minAgeRestriction: number | null; // integer 1-18 or null
    createdAt: string;              // ISO string
    publicationDate: string;        // ISO string, default +1 день
    availableResolutions: Resolution[]; // массив разрешений
}
export type VideoInputModel = {
    title: string;
    author: string;
    availableResolutions?: Resolution[];
    canBeDownloaded?: boolean;
    minAgeRestriction?: number | null;
    publicationDate?: string;
};