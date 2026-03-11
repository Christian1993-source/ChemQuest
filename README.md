# Welcome to ChemQuest

Static web app for MYP 4-5 chemistry review.

## Included

- Student exam mode with a 45-minute timer
- Practice mode without a timer
- Multiple choice, fill in the blank, and numerical questions with tolerance
- Hint button, instant feedback, and a color-coded progress panel
- Teacher Mode for pasting and saving questions
- Local question bank with automatic refresh across tabs in the same browser
- Teacher statistics based on saved attempt history

## Run

Open [index.html](/Users/christian.mercado/.codex/workspaces/default/chemprep-myp/index.html) in a browser.

## Teacher input format

Blocks are separated by a blank line.

```text
Topic: Stoichiometry
What is the molar mass of H2O?
Answer: 18
Tolerance: 0.5
Hint: Add atomic masses of H and O.

Topic: Chemical bonding
NaCl is an example of:
A) Metallic bonding
B) Covalent bonding
C) Ionic bonding*
D) Hydrogen bonding
Hint: Think about metal plus non-metal.
```

## Live update note

This version syncs instantly between tabs on the same browser using `localStorage`, `storage` events, and `BroadcastChannel`.

For multi-device classroom sync, the next step is wiring the same question bank methods to Supabase or Firebase.
