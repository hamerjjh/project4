class Api::VotesController < ApplicationController
    def create
        @vote = Vote.create!(vote_params)
    
        render json: @vote
      end

      def destroy
        
      end 

      private

      
      def vote_params
          params.require(:vote).permit(:user_id, :post_id)
      end
end
    