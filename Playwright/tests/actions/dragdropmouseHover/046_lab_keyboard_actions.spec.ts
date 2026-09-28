import { test, expect } from '@playwright/test';

test.describe('Keyboard Action Practice ', () => {

  test.beforeEach(async ({ page }) => {
     await page.goto('https://sdetqa.vercel.app/keyboard_actions_practice');
     await expect(page.locator('#keyPlaceholder')).toBeVisible();
  });

  // ---------- 1. Single keys ----------
  //This test demonstrates pressing a keyboard key and verifying how the application responds
  test('press letter A', async ({ page }) => {
    await page.keyboard.press('a');//It presses a without Shift. The application itself is displaying the captured key as uppercase A.
    await expect(page.locator('#keyCombo')).toHaveText('A');
  });

  test('press number 5', async ({ page }) => {
    await page.keyboard.press('5');
    await expect(page.locator('#keyCombo')).toHaveText('5');
  });

  test('press Space', async ({ page }) => {
    await page.keyboard.press('Space');
    await expect(page.locator('#keyCombo')).toHaveText('Space');
  });

  test('press Enter', async ({ page }) => {
    await page.keyboard.press('Enter');
    await expect(page.locator('#keyCombo')).toHaveText('Enter');
  });

  test('press Escape', async ({ page }) => {
    await page.keyboard.press('Escape');
    await expect(page.locator('#keyCombo')).toHaveText('Escape');
  });

  test('press Tab', async ({ page }) => {
    await page.keyboard.press('Tab');
    await expect(page.locator('#keyCombo')).toHaveText('Tab');
  });

  test('press Backspace', async ({ page }) => {
    await page.keyboard.press('Backspace');
    await expect(page.locator('#keyCombo')).toHaveText('Backspace');
  });


//   Home → Fn + ←
// End → Fn + →
// Page Up → Fn + ↑
// Page Down → Fn + ↓
// Backspace → Delete (⌫)
  // ---------- 2. Function and navigation keys ----------
  test('press F1', async ({ page }) => {
    await page.keyboard.press('F1');
    await expect(page.locator('#keyCombo')).toHaveText('F1');
  });

  test('press ArrowDown', async ({ page }) => {
    await page.keyboard.press('ArrowDown');
    await expect(page.locator('#keyCombo')).toHaveText('Arrow Down');
  });

  test('press Home', async ({ page }) => {
    await page.keyboard.press('Home');
    await expect(page.locator('#keyCombo')).toHaveText('Home');
  });

  test('press Delete', async ({ page }) => {
    await page.keyboard.press('Delete');
    await expect(page.locator('#keyCombo')).toHaveText('Delete');
  });

  // ---------- 3. Modifier keys alone ----------
  test('press Shift alone', async ({ page }) => {
    await page.keyboard.down('Shift');
    // The display updates on keydown
    await expect(page.locator('#keyCombo')).toHaveText('Shift');
    await page.keyboard.up('Shift');
  });

  test('press Ctrl alone', async ({ page }) => {
    await page.keyboard.down('Control');
    await expect(page.locator('#keyCombo')).toHaveText('Ctrl');
    await page.keyboard.up('Control');
  });

  // ---------- 4. Keyboard shortcuts (modifier + key) ----------
  test('Ctrl + A', async ({ page }) => {
    await page.keyboard.press('Control+A');
    await expect(page.locator('#keyCombo')).toHaveText('Ctrl + A');
    // Shortcut badge should appear
    await expect(page.locator('#shortcutBadge')).toBeVisible();
    await expect(page.locator('#shortcutText')).toHaveText('You pressed Ctrl + A');
  });

  test('Ctrl + C', async ({ page }) => {
    await page.keyboard.press('Control+C');
    await expect(page.locator('#keyCombo')).toHaveText('Ctrl + C');
    await expect(page.locator('#shortcutBadge')).toBeVisible();
    await expect(page.locator('#shortcutText')).toHaveText('You pressed Ctrl + C');
  });

  test('Ctrl + Shift + A', async ({ page }) => {
    await page.keyboard.press('Control+Shift+A');
    await expect(page.locator('#keyCombo')).toHaveText('Ctrl + Shift + A');
    await expect(page.locator('#shortcutBadge')).toBeVisible();
    await expect(page.locator('#shortcutText')).toHaveText('You pressed Ctrl + Shift + A');
  });

  test('Shift + Tab', async ({ page }) => {
    await page.keyboard.press('Shift+Tab');
    await expect(page.locator('#keyCombo')).toHaveText('Shift + Tab');
    await expect(page.locator('#shortcutBadge')).toBeVisible();
    await expect(page.locator('#shortcutText')).toHaveText('You pressed Shift + Tab');
  });


  
  // ---------- 7. Clear and Reset buttons ----------
  test('Clear button empties history', async ({ page }) => {
    await page.keyboard.press('a');
    await page.keyboard.press('b');
    await expect(page.locator('#historyBody tr:not(.empty-row)')).toHaveCount(2);
    //     #historyBody tr:not(.empty-row)
//         ↓
// All rows inside historyBody
//         ↓
// Remove rows with class="empty-row"
//         ↓
// Count the remaining rows
//         ↓
// Expected count = 2
    // Key display resets to placeholder

    await page.locator('#clearBtn').click();

    await expect(page.locator('#historyBody .empty-row')).toBeVisible();
    await expect(page.locator('#historyBody tr:not(.empty-row)')).toHaveCount(0);

    await expect(page.locator('#keyPlaceholder')).toBeVisible();
    await expect(page.locator('#keyCombo')).not.toBeVisible();
    // Shortcut clears
    await expect(page.locator('#shortcutEmpty')).toBeVisible();
  });

  test('Reset button clears everything', async ({ page }) => {
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Shift+Tab');
    await expect(page.locator('#historyBody tr:not(.empty-row)')).toHaveCount(2);

    await page.locator('#resetBtn').click();

    await expect(page.locator('#historyBody .empty-row')).toBeVisible();
    await expect(page.locator('#keyPlaceholder')).toBeVisible();
    await expect(page.locator('#shortcutEmpty')).toBeVisible();
    // Event info resets to '—'
    await expect(page.locator('#infoKey')).toHaveText('—');
    await expect(page.locator('#infoCode')).toHaveText('—');
  });

  // ---------- 8. Numpad keys ----------
  test('Numpad keys are recognised', async ({ page }) => {
    await page.keyboard.press('Numpad1');
    await expect(page.locator('#keyCombo')).toHaveText('1');
    await expect(page.locator('#infoCode')).toHaveText('Numpad1');
    await expect(page.locator('#infoLocation')).toHaveText('Numpad');
  });

  // ---------- 9. Multi‑modifier combo (Ctrl+Alt+Delete) ----------
  test('Ctrl + Alt + Delete', async ({ page }) => {
    await page.keyboard.down('Control');
    await page.keyboard.down('Alt');
    await page.keyboard.press('Delete');
    await expect(page.locator('#keyCombo')).toHaveText('Ctrl + Alt + Delete');
    await expect(page.locator('#shortcutBadge')).toBeVisible();
    await expect(page.locator('#shortcutText')).toHaveText('You pressed Ctrl + Alt + Delete');
    // Clean up
    await page.keyboard.up('Alt');
    await page.keyboard.up('Control');
  });

});