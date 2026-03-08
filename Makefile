PORT ?= 4173

.PHONY: serve check clean

serve:
	python3 -m http.server $(PORT) --directory site

check:
	test -f site/index.html
	test -f site/assets/style.css
	test -f site/assets/ui.js
	test -f site/assets/profile.png
	test -f site/.nojekyll

clean:
	rm -rf dist
