# 使用官方 Node.js 镜像
FROM docker.unsee.tech/node:20

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json
COPY package*.json ./ yarn.lock ./

# 安装依赖
RUN yarn

# 复制所有源代码
COPY . .

# 构建应用
RUN yarn build

# 暴露端口
EXPOSE 3000

# 启动应用
CMD ["yarn", "start"]
