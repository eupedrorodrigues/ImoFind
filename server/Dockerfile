from node:18

WORKDIR /home/app

copy src /home/app/src
COPY ./*.json /home/app/
copy ./.env /home/app/

copy ./.sequelizerc /home/app/.sequelizerc

COPY --from=ghcr.io/ufoscout/docker-compose-wait:latest /wait /wait
RUN chmod +x /wait

run yarn install

expose 3333

CMD ["yarn", "run", "dev"]
