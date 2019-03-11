run-dev:
	docker rm -f alena | echo 'rm skipped'
	docker run \
		-v $$PWD:/build \
		--name alena \
		-p 3030:3030 --rm \
		alena
build-dev:
	docker build -t alena . -f Dockerfile.dev
	
build:
	docker build -t alena . -f Dockerfile
	
push:
	docker tag alena madiedinro/alena
	docker push madiedinro/alena

release: build push

yarn:
	yarn
	yarn start:dev
