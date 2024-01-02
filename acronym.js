function acronym(string) {
  let regex = /[\s-]/g;
  let words = string.split(regex)
                    .map(word => word[0].toUpperCase())
                    .join('');

  console.log(words);
}

acronym('Portable Network Graphics');                  // "PNG"
acronym('First In, First Out');                        // "FIFO"
acronym('PHP: HyperText Preprocessor');                // "PHP"
acronym('Complementary metal-oxide semiconductor');    // "CMOS"
acronym('Hyper-text Markup Language');                 // "HTML"