import { ExamAttempt } from '../types';

const STORAGE_KEYS = {
  ATTEMPTS: 'anatomy_exam_lab_attempts_v1',
  ACTIVE_EXAM: 'anatomy_exam_lab_active_session_v1',
  BOOKMARKS: 'anatomy_exam_lab_bookmarks_v1',
  THEME: 'anatomy_exam_lab_theme_v1'
};

export const StorageService = {
  // Past Attempts
  getAttempts(): ExamAttempt[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.ATTEMPTS);
      if (!data) return [];
      const parsed = JSON.parse(data);
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      console.error('Error reading attempts from storage:', e);
      return [];
    }
  },

  saveAttempt(attempt: ExamAttempt): void {
    try {
      const existing = this.getAttempts();
      // Prevent duplicate saving of the exact same attempt ID
      const filtered = existing.filter(a => a.id !== attempt.id);
      const updated = [attempt, ...filtered];
      localStorage.setItem(STORAGE_KEYS.ATTEMPTS, JSON.stringify(updated));
    } catch (e) {
      console.error('Error saving attempt to storage:', e);
    }
  },

  deleteAttempt(attemptId: string): void {
    try {
      const existing = this.getAttempts();
      const updated = existing.filter(a => a.id !== attemptId);
      localStorage.setItem(STORAGE_KEYS.ATTEMPTS, JSON.stringify(updated));
    } catch (e) {
      console.error('Error deleting attempt:', e);
    }
  },

  clearAllAttempts(): void {
    try {
      localStorage.removeItem(STORAGE_KEYS.ATTEMPTS);
    } catch (e) {
      console.error('Error clearing attempts:', e);
    }
  },

  // Active exam session (for auto-recovery on page refresh)
  getActiveSession<T>(): T | null {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.ACTIVE_EXAM);
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  },

  saveActiveSession<T>(session: T): void {
    try {
      localStorage.setItem(STORAGE_KEYS.ACTIVE_EXAM, JSON.stringify(session));
    } catch (e) {
      console.error('Error saving active session:', e);
    }
  },

  clearActiveSession(): void {
    try {
      localStorage.removeItem(STORAGE_KEYS.ACTIVE_EXAM);
    } catch (e) {
      console.error('Error clearing active session:', e);
    }
  },

  // Bookmarked questions
  getBookmarks(): string[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  toggleBookmark(questionId: string): boolean {
    try {
      const bookmarks = this.getBookmarks();
      const exists = bookmarks.includes(questionId);
      const updated = exists 
        ? bookmarks.filter(id => id !== questionId)
        : [...bookmarks, questionId];
      localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(updated));
      return !exists;
    } catch {
      return false;
    }
  },

  // Theme
  getTheme(): 'dark' | 'light' {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.THEME);
      if (saved === 'dark' || saved === 'light') return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  },

  setTheme(theme: 'dark' | 'light'): void {
    try {
      localStorage.setItem(STORAGE_KEYS.THEME, theme);
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (e) {
      console.error('Error setting theme:', e);
    }
  }
};
