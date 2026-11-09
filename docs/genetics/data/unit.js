window.UNITS = window.UNITS || {};
window.UNITS.genetics = {
  key: 'genetics', order: 3, code: 'Unit 3', title: 'Molecular Genetics', path: 'genetics',
  headline: 'From a gene to a working protein.',
  lede: 'How DNA was discovered, how it is built and copied, how a gene is transcribed and translated, what mutations do, and how bacteria switch genes on and off. Every lesson in full detail with step-through diagrams, every class question answered, a practice bank and extra content the slides skipped.',
  qaBlurb: 'from the slides, the review answer keys, the worksheets and the class activities (history case files, replication card sort, mutation explorer, operon activity)',
  overviewCaption: 'The central dogma on one map: DNA is copied (replication), transcribed into pre-mRNA in the nucleus, processed into mature mRNA, then translated into a polypeptide at a ribosome in the cytoplasm.',
  lessons: [
    { id: '3.01', title: 'History of Genetics', stage: 'g-hist', group: 'DNA: discovery, structure and copying' },
    { id: '3.02', title: 'DNA Structure', stage: 'g-dna' },
    { id: '3.03', title: 'DNA Replication', stage: 'g-rep' },
    { id: '3.04', title: 'Transcription', stage: 'g-tx', group: 'Protein synthesis' },
    { id: '3.05', title: 'Translation', stage: 'g-tl' },
    { id: '3.06', title: 'Mutations', stage: 'g-mut', group: 'Changing and controlling genes' },
    { id: '3.07', title: 'Gene Regulation: Operons', stage: 'g-reg' }
  ]
};
