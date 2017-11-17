class Api::PostsController < ApplicationController
    def index 
        @posts = Post.all 

        posts_response = @posts.map do |post|
            {
                id: post.id,
                category: post.category,
                title: post.title,
                description: post.description,
                votes: Vote.where(post_id: post.id).count
            }
        end
        
        render json: posts_response 
    end

    def create
        @post = Post.create!(post_params)
    
        render json: @post
    end

    def show 
        @post = Post.find(params[:id])

        post_response = {
            id: @post.id,
            category: @post.category,
            title: @post.title,
            description: @post.description,
            votes: Vote.where(post_id: @post.id).count
        }

        render json: post_response
    end

    def update
        @post = Post.find(params[:id])
        @post.update!(post_params)
    
        render json: @post
    end

    def destroy
        @post = Post.find(params[:id]).delete
        @posts = Post.all
        render json: @posts
    end

    private
    
    def post_params
        params.require(:post).permit(:type, :title, :description)
    end
end
