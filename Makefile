BOX_REACTJS=react-app

start: ## Start the container
	docker-compose up -d

destroy: ## Stop the container
	docker-compose down --remove-orphans --volumes --rmi all

stop:## Stop the container and remove all associated resources
	docker-compose down

login: ## Access container shell
	docker-compose exec -it ${BOX_REACTJS} bash

dev:
	docker-compose exec ${BOX_REACTJS} bash -c "\
			npm run dev"
netlify: ## Deploy to Netlify
	docker-compose exec ${BOX_REACTJS} bash -c "\
			npx netlify functions:serve"

compile: ## New task for file merging
	make start
	@docker-compose exec ${BOX_REACTJS} bash -c "\
      find my-app -type d -name node_modules -prune -o -type f -print | while read -r f; do \
        if [[ \"\$$f\" != *\.ttf  && \"\$$f\" != *\.DS_Store ]]; then \
          echo 'File: '\$$f; cat \$$f; echo; echo; \
        fi; \
      done > chatgpt-codebase-compiled.txt"
	@grep 'File:' chatgpt-codebase-compiled.txt
