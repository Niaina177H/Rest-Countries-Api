import { useMemo, useState } from "react";
import { createContext } from "vm";

export const context = { theme: 'light' }
export const Theme = createContext(context)