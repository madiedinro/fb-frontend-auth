run-dev:
	docker rm -f alena | echo 'rm skipped'
	docker run \
		--name alena \
		-p 8080:8080 \
		-p 2015:2015 \
		alena
build:
	docker build -t alena .
	
push:
	docker tag alena madiedinro/alena
	docker push madiedinro/alena