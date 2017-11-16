class Api::VotesController < ApplicationController
    def create
        @vote = Vote.create!(vote_params)
    
        render json: @vote
      end

      private
      
      def vote_params
          params.require(:vote).permit(:userId, :postId)
      end
end
    