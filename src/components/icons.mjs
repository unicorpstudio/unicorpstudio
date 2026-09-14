const paths = {
 arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
 diagonal: '<path d="M6 18 18 6M6 6h12v12"/>',
 plus: '<path d="M12 5v14M5 12h14"/>',
 check: '<path d="m5 12 4 4L19 6"/>',
 layers: '<path d="m12 3 10 5-10 5L2 8l10-5ZM2 12l10 5 10-5M2 16l10 5 10-5"/>',
 grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
 code: '<path d="m7 6-6 6 6 6M17 6l6 6-6 6M14 3l-4 18"/>',
 window: '<rect x="2" y="3" width="20" height="18" rx="2"/><path d="M2 8h20M6 5.5h.01M9 5.5h.01M12 5.5h.01M6 12h5M6 16h12"/>',
 compass: '<circle cx="12" cy="12" r="9"/><path d="m16 8-3 5-5 3 3-5 5-3Z"/>',
 branch: '<circle cx="6" cy="4" r="2"/><circle cx="18" cy="5" r="2"/><circle cx="6" cy="20" r="2"/><path d="M6 6v12M18 7v2a7 7 0 0 1-7 7H6"/>',
 bolt: '<path d="m13 2-9 12h7l-1 8 10-13h-7l1-7Z"/>',
 launch: '<path d="M12 19V5m-6 6 6-6 6 6M4 19v3h16v-3"/>',
 book: '<path d="M12 5c-3-2-6-2-10-1v15c4-1 7-1 10 1 3-2 6-2 10-1V4c-4-1-7-1-10 1Zm0 0v15"/>',
 cursor: '<path d="m4 3 6 18 3-8 8-3L4 3Z"/>',
 control: '<path d="M4 7h16M4 17h16"/><rect x="7" y="4" width="4" height="6" rx="1"/><rect x="14" y="14" width="4" height="6" rx="1"/>',
 globe: '<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/>',
 case: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M8 7V3h8v4M2 12c6 4 14 4 20 0M12 12v5"/>',
 people: '<circle cx="9" cy="7" r="3"/><path d="M2 21v-3a7 7 0 0 1 14 0v3M16 4a3 3 0 0 1 0 6M19 14a6 6 0 0 1 3 7"/>',
 cross: '<path d="m6 6 12 12M6 18 18 6"/>',
 down: '<path d="M12 4v16m-6-6 6 6 6-6"/>',
 shield: '<path d="M12 2 3 6v7c0 5 9 9 9 9s9-4 9-9V6l-9-4Z"/><path d="m8 12 3 3 5-6"/>'
 ,calendar:'<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M8 14h2M14 14h2M8 18h2"/>'
 ,chart:'<path d="M4 19V5M4 19h17"/><path d="m7 15 4-5 3 2 5-7"/>'
};
export const icon=(name,cls='')=>`<svg class="icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]||paths.grid}</svg>`;
