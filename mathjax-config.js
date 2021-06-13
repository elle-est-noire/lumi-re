window.MathJax = {
  loader: {load: ['[tex]/physics']},
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    packages: { '[+]': ['physics'] },
    macros: {
      parn: ["\\biggl(#1\\biggr)", 1],
      pfrac: ["\\biggl(\\dfrac{#1}{#2}\\biggr)", 2],
      ds: "\\displaystyle",
      C: '{\\mathbb C}',
      R: '{\\mathbb R}',
      Q: '{\\mathbb Q}',
      Z: '{\\mathbb Z}',
      ssqrt: ['\\sqrt{\\smash[b]{\\mathstrut #1}}', 1],
      tcdegree: ['\\unicode{xb0}'],
      tccelsius: ['\\unicode{x2103}'],
      tcperthousand: ['\\unicode{x2030}'],
      tcmu: ['\\unicode{x3bc}'],
      tcohm: ['\\unicode{x3a9}'],
    },
    tags: 'ams',
    processRefs: true,
  },
  svg: {
    fontCache: 'global'
  },
  startup: {
    ready: () => {
      console.log('MathJax is loaded, but not yet initialized');
      MathJax.startup.defaultReady();
      console.log('MathJax is initialized, and the initial typeset is queued');
      MathJax.startup.promise.then(() => {
        console.log('MathJax initial typesetting complete');
      });
    }
  }
};

(function () {
  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
  // script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.0.0/es5/latest?tex-mml-chtml.js';
  script.async = true;
  document.head.appendChild(script);
})();
