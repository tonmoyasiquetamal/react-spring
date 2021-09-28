const selectedBookTransitions = useTransition(selectedBooks, {
  config: book => ({
    ...config.stiff,
    clamp: !selectedBooksMap[book._id]
  }),
  from: { opacity: 0, transform: "translate3d(-25%, 0px, 0px)" },
  enter: book => ({
    opacity: 1,
    height: displaySizes[book._id],
    transform: "translate3d(0%, 0px, 0px)"
  }),
  update: book => ({ height: displaySizes[book._id] }),
  leave: { opacity: 0, height: 0, transform: "translate3d(25%, 0px, 0px)" }
});
