<script>
alert('work');
// Ambil elemen dengan ID 'entah'
var element = document.getElementById('entah');
// Tambahkan elemen HTML baru menggunakan innerHTML
element.innerHTML = ' <div class="cse-panel"><h2 class="h3" style="display: none;">More Images</h2><div class="gcse-searchresults-only" data-defaultToImageSearch="true"                        data-imageSearchLayout="column" data-image_size="large, xlarge, xxlarge" data-disableWebSearch="true" data-resultSetSize="large" data-mobileLayout="disabled" data-queryParameterName="q"></div></div>';


</script>
<script async src="https://cse.google.com/cse.js?cx=176d89846a45b4e0c"></script>
                <style>
                    .gs-previewUrl,
                    .gcsc-branding,
                    .gs-text-box,
                    .gs-previewDescription,
                    .gsc-above-wrapper-area,
                    .gsc-results-close-btn {
                        display: none !important;
                    }

                    .gs-selectedImageResult {
                        height: 780px !important;
                    }

                    .gs-imagePreviewArea {
                        height: 600px !important;
                    }

                    .gsc-control-cse {
                        padding: 0px !important;
                    }
                </style>
<script>
                    const badKeywords = ['Pin page'];
                    const imageResultsRenderedCallback = (name, q, promos, results) => {
                        if (document.querySelector('.gs-mobilePreview')) {
                            document.querySelectorAll(".gs-previewSnippet>a").forEach((el) => {
                                if (badKeywords.includes(el.textContent.trim(), 0)) {
                                    el.href = '/search?q='+q;
                                    el.text = q
                                }
                            
                            });
                        } else {
                            document.querySelectorAll(".gs-previewTitle>a").forEach((el) => {
                                if (badKeywords.includes(el.textContent.trim(), 0)) {
                                    el.href = '/search?q='+q;
                                    el.text = q
                                } else {
                                    el.href = '/search?q='+el.textContent;
                                }
                                el.parentElement.parentElement.parentElement.querySelector("a").href =
                                    el.href;
                            });

                            document.body.classList.remove("gsc-overflow-hidden");
                            document.querySelector(".gsc-modal-background-image").remove();
                            document.querySelector(".gsc-above-wrapper-area-container").remove();
                            document.querySelector(".gsc-results-wrapper-visible").classList.remove("gsc-results-wrapper-overlay");
                            document.querySelector(".cse-panel>h2").style.display = 'block';

                        }
                    };
                    window.__gcse || (window.__gcse = {});
                    window.__gcse.searchCallbacks = { image: { rendered: imageResultsRenderedCallback } };
                </script>
